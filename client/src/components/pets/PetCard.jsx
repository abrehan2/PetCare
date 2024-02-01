/* eslint-disable react/prop-types */
import DarkButton from "./DarkButton";
// import avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";

const PetCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    petName,
    category,
    breed,
    startDate,
    endDate,
    ownerMessage,
    petId,
    profile,
  } = props;
  return (
    <div className="rounded-[3rem] bg-[#F8AA26] relative pb-[0.5rem] pr-[0.5rem] max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%]">
      <div className="py-[2rem] px-[3rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[2rem] items-center">
        <div className="petDetails flex gap-[2rem] items-center">
          <div className="overflow-hidden w-[5rem] h-[5rem] rounded-[50%]">
            <img
              src={profile?.url}
              alt="pet_profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="details text-[#0B0019] font-primary flex flex-col ">
            <h1 className="petName uppercase font-bold text-[3rem] leading-[2.5rem]">
              {petName}
            </h1>
            <h3 className="breed text-[2rem]">{`${category}, ${breed}`}</h3>
            <h2 className="dateRange font-semibold text-[1.5rem]">
              {`${startDate} - ${endDate}`}
            </h2>
          </div>
        </div>
        {ownerMessage && (
          <h2 className="dateRange w-[90%] font-primary text-[1.3rem] px-4 text-center overflow-auto">
            {ownerMessage ? ownerMessage : ""}
          </h2>
        )}
        <div className="buttons flex justify-between gap-[3rem]">
          <Link to={`/pets/${petId}`}>
            <DarkButton buttonText="More Details" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
