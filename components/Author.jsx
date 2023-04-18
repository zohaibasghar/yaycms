import Image from "next/image";

const Author = (props) => {
  const { name, description, photo } = props.author;
  return (
    <div className="bg-opacity-20 bg-slate-50 rounded-md mx-1 my-5 text-white p-4 flex items-center gap-5">
      <Image
        alt={name}
        src={photo.url}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="font-mono">
        <h3 className="font-bold text-xl py-1">{name}</h3>
        <div className="py-1">{description}</div>
      </div>
    </div>
  );
};

export default Author;
