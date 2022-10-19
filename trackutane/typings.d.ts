type Patient = {
  email: string;
  name: string;
};

type PatientList = {
  name: IDBCursor;
  value: Patient;
};

type Visit = {
  date: string;
  visitDosage: number;
  cumulativeDosage: number;
  nextVisit: string;
};

type VisitResponse = {
  value: Visit;
};

type PatientResponse = {
  name: ID;
  value: Patient;
};
