import { Server } from "../../Types/server";

export const sortRate = (a: Server, b: Server) => {
  return a.rating - b.rating;
};

export const addClass = (e: React.MouseEvent<HTMLButtonElement>) => {
  let element: HTMLButtonElement = e.currentTarget;
  element.classList.toggle("button--activeBtn");
  return;
};

export const sortDate = (a: Server, b: Server) => {
  let aArray: string[] = a.date.split(".");
  let bArray: string[] = b.date.split(".");
  let dateArrayA: Date = new Date(
    parseInt(aArray[2]),
    parseInt(aArray[1]) - 1,
    parseInt(aArray[0])
  );
  let dateArrayB: Date = new Date(
    parseInt(bArray[2]),
    parseInt(bArray[1]) - 1,
    parseInt(bArray[0])
  );
  return dateArrayA.getTime() - dateArrayB.getTime();
};
