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
    badgeImg: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",

    label: "In progress",
  },
  {
    name: "AWS Certified Developer – Associate",
    status: "pending",
    badgeImg: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    label: "In progress",
  },
  {
    name: "HashiCorp Certified: Terraform Associate (004)",
    status: "pending",
    badgeImg: "https://images.credly.com/size/340x340/images/0e717fa5-93a1-4203-964c-051b4734b7eb/blob",
    label: "In progress",
  },
];