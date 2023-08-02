import React from "react";

interface IProps {
  data: ICastActors[] | ProductionCountries[];
  title: string;
}

const Cast = ({ data, title }: IProps) => {
  return (
    <div className="border-b border-[#c3c3c3] py-4 text-turq">
      <span className="text-[#E8E8E8]">{title}: </span>
      {data.length ? (
        data
          ?.slice(0, 3)
          .map((member, i) => (
            <span key={member.name}>{(i ? ", " : "") + member.name}</span>
          ))
      ) : (
        <span>No info</span>
      )}
    </div>
  );
};

export default Cast;
