import I from "../assets/instrument.svg";
import R from "../assets/road.svg";
interface IInstrument {
  name: string;
  status: "Active" | "NotActive";
  date: string;
  icon: string;
}

export const overview: Array<IInstrument> = [
  {
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 2",
    status: "Active",
    date: "Dec 27th",
    icon: R,
  },
  {
    name: "VP element 3",
    status: "NotActive",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 4",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 5",
    status: "Active",
    date: "Dec 27th",
    icon: R,
  },
  {
    name: "VP element 6",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 7",
    status: "NotActive",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 8",
    status: "Active",
    date: "Dec 27th",
    icon: R,
  },
  {
    name: "VP element 9",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
];
