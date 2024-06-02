import { ReactNode } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";

interface DropZoneProps {
  onDrop: (type: string, offset: { x: number; y: number } | null) => void;
  children: ReactNode;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop, children }) => {
  const [, dropRef] = useDrop({
    accept: ["CHAIR", "TABLE", "ROUNDTABLE"],
    drop: (item: { type: string }, monitor: DropTargetMonitor) => {
      const offset = monitor.getClientOffset();
      onDrop(item.type, offset);
    },
  });

  return (
    <div ref={dropRef} className=" w-80 h-96 relative border-2 bg-slate-500">
      {children}
    </div>
  );
};

export default DropZone;
