export type Certification = {
  name: string;
  status: "earned" | "pending";
  badgeImg?: string;
  verifyHref?: string;
  label?: string;
};

export const certifications: Certification[] = [
  {
    name: "PCEP — Certified Entry-Level Python Programmer",
    status: "earned",
    badgeImg: "https://images.credly.com/images/b790eb12-ecb3-4b94-89be-61aa40c92e7c/image.png",
    verifyHref: "https://www.credly.com/badges/5f2e88c9-bff5-482d-83a9-a7b9e75e0162",
  },
  {
    name: "PCAP — Certified Associate in Python Programming",
    status: "earned",
    badgeImg: "https://images.credly.com/images/4e248e82-9e87-4a63-9263-250fafe5fb1f/image.png",
    verifyHref: "https://www.credly.com/badges/326cba21-6c50-4e0c-86a8-ab8c67963825",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    status: "earned",
    badgeImg: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    verifyHref: "https://www.credly.com/badges/f2c9bffd-edba-4180-80b4-a2b029cdd49d/public_url",
  },
  {
    name: "AWS Solutions Architect – Associate",
    status: "pending",
    label: "In progress",
  },
  {
    name: "AWS Certified Developer – Associate",
    status: "pending",
    label: "In progress",
  },
];