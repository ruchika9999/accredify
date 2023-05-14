import { AsyncState } from "../utils/constants";

export const userData = {
  id: 1,
  name: "John Smith",
  email: "john.smith@example.com",
  profile_picture_url: "https://placehold.co/600x400.png",
  email_verified_at: "2022-01-01 15:38:33.0 Asia/Singapore (+08:00)",
  identification_number: "S9****567A",
  current_organisation: {
    id: 2,
    name: "Sample Bank ABC",
    logo_url: "https://placehold.co/600x400.png",
    is_personal: false, // true if Personal User
  },
};

export const successPayload = {
  user: userData,
  loading: AsyncState.SUCCESS,
  error: null,
};

export const loadingPayload = {
  user: null,
  loading: AsyncState.LOADING,
  error: null,
};

export const errorPayload = {
  user: null,
  loading: AsyncState.FAILED,
  error: "Error",
};

export const mockLabel = {
  loading: "loading...",
  name: "Hi, John Smith👋",
  description:
    "Manage your documents issued by SMU Academy or track your career goal.",
  displayName : "John Smith",
  iconName : 'JS'
};
