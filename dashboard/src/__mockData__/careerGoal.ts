import { AsyncState } from "../utils/constants";

export const careerGoal = [
  {
    id: 1,
    name: "Account Manager",
    description:
      "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
    category: "Sales and Marketing",
    type: "technical", // or "core"
    progress: 50, // integer ranging from 0 to 100
  },
];

export const successPayload = {
  goals: careerGoal,
  loading: AsyncState.SUCCESS,
  error: null,
};

export const loadingPayload = {
  goals: [],
  loading: AsyncState.LOADING,
  error: null,
};

export const errorPayload = {
  goals: [],
  loading: AsyncState.FAILED,
  error: "Error",
};

export const mockLabel = {
  heading: "Career Goal",
  progressSubHeading: "Your Progress",
  become: "I want to become a",
  goal: "Sales and Marketing",
  viewLink: "View Insights",
  loading: "loading...",
};
