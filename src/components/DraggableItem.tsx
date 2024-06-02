import React, { ReactNode } from "react";
import Draggable, { DraggableProps } from "react-draggable";

interface DraggableItemProps {
  children: ReactNode;
  defaultPosition: DraggableProps["defaultPosition"];
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  children,
  defaultPosition,
}) => (
  <Draggable defaultPosition={defaultPosition}>
    <div style={{ position: "absolute" }}>{children}</div>
  </Draggable>
);

export default DraggableItem;
