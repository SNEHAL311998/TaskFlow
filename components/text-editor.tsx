import ReactQuill from "react-quill";

export const TextEditor = ({
  value,
  setValue,
  className,
}: {
  value: any;
  setValue: any;
  className?: any;
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ "code-block": true }],
    ],
  };
  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={setValue}
      className={className}
    />
  );
};
