import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_VISITS } from "../graphql/queries";

const useVisits = () => {
  const { loading, error, data } = useQuery(GET_VISITS);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    if (!data) return;

    const visits: Visit[] = data.getVisits.map(({ value }: VisitResponse) => ({
      date: value.date,
      visitDosage: value.visitDosage,
      cumulativeDosage: value.cumulativeDosage,
      nextVisit: value.nextVisit,
    }));

    setVisits(visits);
  }, [data]);

  return { loading, error, visits };
};

export default useVisits;
