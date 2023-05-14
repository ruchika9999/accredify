import { AsyncState } from "../utils/constants";

export const documentDetail = {
  data: [
    {
      id: 1,
      status: "issued",
      document_name: "SWAB Test Result",
      issuer_name: "ISSUER NAME",
      issuer_logo_url: "https://placehold.co/600x400.png",
      recipient_name: "John Frusciante",
      received_on: "2022-01-12T17:58:25.000000Z",
      expire_at: "2023-01-12T00:00:00.000000Z",
      created_at: "2022-01-12T10:45:10.000000Z",
      updated_at: "2022-01-12T17:58:25.000000Z",
      archived_at: null,
      deleted_at: null,
    },
    {
      id: 2,
      status: "approved",
      document_name: "SWAB Test Result",
      issuer_name: "ISSUER NAME",
      issuer_logo_url: "https://placehold.co/600x400.png",
      recipient_name: "John Frusciante",
      received_on: "2022-05-05T09:00:00.000000Z",
      expire_at: null,
      created_at: "2022-01-12T10:45:10.000000Z",
      updated_at: "2022-01-12T17:58:25.000000Z",
      archived_at: null,
      deleted_at: null,
    },
    {
      id: 3,
      status: "issued",
      document_name: "Vaccination Certificate",
      issuer_name: "VACCINE CENTER NAME",
      issuer_logo_url: "https://placehold.co/600x400.png",
      recipient_name: "Jane Doe",
      received_on: "2022-03-15T13:20:00.000000Z",
      expire_at: "2022-09-15T00:00:00.000000Z",
      created_at: "2022-03-15T10:45:10.000000Z",
      updated_at: "2022-03-15T13:20:00.000000Z",
      archived_at: null,
      deleted_at: null,
    },
    {
      id: 4,
      status: "approved",
      document_name: "Degree Certificate",
      issuer_name: "UNIVERSITY NAME",
      issuer_logo_url: "https://placehold.co/600x400.png",
      recipient_name: "John Doe",
      received_on: "2022-05-05T09:00:00.000000Z",
      expire_at: null,
      created_at: "2022-04-23T10:45:10.000000Z",
      updated_at: "2022-04-23T11:30:00.000000Z",
      archived_at: null,
      deleted_at: null,
    },
    {
      id: 5,
      status: "issued",
      document_name: "Employment Contract",
      issuer_name: "EMPLOYER NAME",
      issuer_logo_url: "https://placehold.co/600x400.png",
      recipient_name: "John Doe",
      received_on: "2022-05-05T09:00:00.000000Z",
      expire_at: "2023-05-05T00:00:00.000000Z",
      created_at: "2022-05-05T08:45:10.000000Z",
      updated_at: "2022-05-05T09:00:00.000000Z",
      archived_at: null,
      deleted_at: null,
    },
  ],
};

export const successPayload = {
  documents: documentDetail,
  loading: AsyncState.SUCCESS,
  error: null,
};

export const loadingPayload = {
  documents: null,
  loading: AsyncState.LOADING,
  error: null,
};

export const errorPayload = {
  documents: null,
  loading: AsyncState.FAILED,
  error: "Error",
};

export const mockLabel = {
  heading: "Recent Documents",
  viewLink: "View All Documents",
  table: {
    documentName: "Document Name",
    receivedOn: "Received On",
  },
  documentName: "SWAB Test Result",
  receivedOnDate: "Jan 13, 2022",
  loading : "loading...",
};
