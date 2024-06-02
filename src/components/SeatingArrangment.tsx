import React, { ReactNode, useState } from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Chair from "../assets/Chair";
import Table from "../assets/Table";
import RoundTable from "../assets/RoundTable";
import DraggableItem from "./DraggableItem";
import DropZone from "./Dropzone";
import Tooltip from "./Tooltip";

const ItemTypes = {
  CHAIR: "CHAIR",
  TABLE: "TABLE",
  ROUNDTABLE: "ROUNDTABLE",
};

interface DraggableSourceProps {
  type: string;
  children: ReactNode;
}

const DraggableSource: React.FC<DraggableSourceProps> = ({
  type,
  children,
}) => {
  const [, dragRef] = useDrag({
    type,
    item: { type },
  });

  return (
    <div ref={dragRef} style={{ cursor: "move", marginRight: "10px" }}>
      {children}
    </div>
  );
};

interface Item {
  type: string;
  position: { x: number; y: number };
  guestName: string;
}

const SeatingArrangment: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    index: number;
  } | null>(null);

  const handleDrop = (
    type: string,
    position: { x: number; y: number } | null
  ) => {
    if (position) {
      const position = { x: event.clientX - 600, y: event.clientY - 220 };
      setItems([...items, { type, position, guestName: "" }]);
    }
  };

  const handleClick = (index: number, x: number, y: number) => {
    setTooltip({ visible: true, x, y, index });
  };

  const handleSaveGuestName = (guestName: string) => {
    if (tooltip) {
      const newItems = [...items];
      newItems[tooltip.index].guestName = guestName;
      setItems(newItems);
    }
  };

  const handleCloseTooltip = () => {
    setTooltip(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen mt-[151px] mx-2 p-1">
        <div className="flex p-2 border-b-2">
          <DraggableSource type={ItemTypes.CHAIR}>
            <Chair />
          </DraggableSource>
          <DraggableSource type={ItemTypes.TABLE}>
            <Table />
          </DraggableSource>
          <DraggableSource type={ItemTypes.ROUNDTABLE}>
            <RoundTable />
          </DraggableSource>
        </div>
        <div className="flex-1 p-2 relative">
          <DropZone onDrop={handleDrop}>
            {items.map((item, index) => {
              const { type, position } = item;
              let Component: React.ComponentType | null = null;
              if (type === ItemTypes.CHAIR) {
                Component = Chair;
              } else if (type === ItemTypes.TABLE) {
                Component = Table;
              } else if (type === ItemTypes.ROUNDTABLE) {
                Component = RoundTable;
              }
              return (
                Component && (
                  <DraggableItem
                    key={index}
                    defaultPosition={{ x: position.x, y: position.y }}
                    onClick={(e) => handleClick(index, position.x, position.y)}
                  >
                    <Component />
                  </DraggableItem>
                )
              );
            })}
          </DropZone>
          {tooltip && tooltip.visible && (
            <Tooltip
              x={tooltip.x}
              y={tooltip.y}
              guestName={items[tooltip.index].guestName}
              onSave={handleSaveGuestName}
              onClose={handleCloseTooltip}
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default SeatingArrangment;
