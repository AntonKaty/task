import I from "../assets/instrument.svg"

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
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "NotActive",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "NotActive",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
  {
    name: "VP element 1",
    status: "Active",
    date: "Dec 27th",
    icon: I,
  },
];
