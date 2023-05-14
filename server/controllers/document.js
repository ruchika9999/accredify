const express = require("express");

const getDocument = (req, res) => {

    const document = {
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
        links: {
          first: "http://localhost/document-module/identities/1/documents?page=1",
          last: "http://localhost/document-module/identities/1/documents?page=1",
          prev: null,
          next: null,
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          links: [
            {
              url: null,
              label: "pagination.previous",
              active: false,
            },
            {
              url: "http://localhost/document-module/identities/1/documents?page=1",
              label: "1",
              active: true,
            },
            {
              url: null,
              label: "pagination.next",
              active: false,
            },
          ],
          path: "http://localhost/document-module/identities/1/documents",
          per_page: 10,
          to: 10,
          total: 2,
        },
      };

  res.status(200).json(document);
};

module.exports = { getDocument };
