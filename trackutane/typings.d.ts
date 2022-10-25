type Patient = {
  dateAdded: Date;
  name: string;
  address: string;
  city: string;
  zipCode: number;
  phone: string;
  email: string;
};

type PatientList = {
  name: IDBCursor;
  value: Patient;
};

type Visit = {
  provider: string;
  date: string;
  visitDosage: number;
  cumulativeDosage: number;
  nextVisit: string;
  followUp: string;
};

type VisitResponse = {
  value: Visit;
};

type PatientResponse = {
  name: ID;
  value: Patient;
};
