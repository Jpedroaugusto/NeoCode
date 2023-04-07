import BorderProps from "../../types/BorderProps";

export function Border({ color, width }: BorderProps) {
  return (
    <div>
      <span
        style={{
          display: "block",
          width: width + "px",
          height: "3px",
          backgroundColor: color,
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
