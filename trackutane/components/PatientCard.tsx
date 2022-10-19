import React from "react";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const PatientCard = ({ email, name, userId }: Props) => {
  return <div>PatientCard</div>;
};

export default PatientCard;
