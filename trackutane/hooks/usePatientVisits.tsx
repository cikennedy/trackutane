import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_VISITS } from "../graphql/queries";

const usePatientVisits = (userId: string) => {
  const { loading, error, data } = useQuery(GET_VISITS);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    if (!data) return;

    const visits: Visit[] = data.getVisits.map(({ value }: VisitResponse) => ({
      date: value.date,
      provider: value.provider,
      visitId: value.visitId,
      tracking: value.tracking,
    }));

    // tracking details?
    const patientVisits = visits.filter((visit) => visit.tracking.patient_id);
  }, [data]);

  return { loading, error, visits };
};

export default usePatientVisits;
