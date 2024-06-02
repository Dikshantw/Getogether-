import React, { ReactNode } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface DraggableItemProps {
  children: ReactNode;
  defaultPosition: DraggableProps["defaultPosition"];
  onClick: () => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  children,
  defaultPosition,
  onClick,
}) => (
  <Draggable defaultPosition={defaultPosition}>
    <div style={{ position: "absolute" }} onClick={onClick}>
      {children}
    </div>
  </Draggable>
);

export default DraggableItem;
