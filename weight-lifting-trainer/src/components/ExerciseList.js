import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
import axios from "axios";
import ExerciseCard from "./ExerciseCard";

export default function Exercise() {
  const [data, setData] = useState([]);

  let routine = [];

  useEffect(() => {
    axios
      .get(
        "https://weight-lifting-journal-web25.herokuapp.com/api/workouts/1/exercises"
      )
      .then(response => {
        setData(response.data[0]);
        console.log("response", response.data);

        //map with RoutineList either by importing RL or moving this to RL
      });
  }, []);
  return (
    <ExerciseCard
      exerciseName={data.exerciseName}
      musclesName={data.musclesName}
    />
  );
}
