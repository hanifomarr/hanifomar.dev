interface SectionDetail {
  title: string;
  company_name: string;
  company_location?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
}

interface Section {
  section_title: string;
  section_details: SectionDetail[];
}

export const experienceData: Section[] = [
  {
    section_title: "Experience",
    section_details: [
      {
        title: "Front End Developer",
        company_name: "Naaz Premier Sdn. Bhd.",
        company_location: "Sungai Buloh",
        description:
          "As a Front-End Developer at Naaz Premier Sdn. Bhd., I led the transition of the front-end architecture from Django to React, enhancing the application’s performance and scalability. My role involved designing and developing reusable components and integrating them seamlessly with back-end services via RESTful APIs. Additionally, I implemented interactive data visualizations and played a key role in adopting Scrum practices, streamlining the development process.",
        start_date: "6/1/2023",
      },
      {
        title: "Web Developer",
        company_name: "Fastrexs (M) Sdn. Bhd.",
        company_location: "Cyberjaya",
        description:
          "At Fastrexs (M) Sdn. Bhd., I developed and maintained the client side of the in-house Point-Of-Sale (POS) system, focusing on creating a smooth and user-friendly interface. My work involved close collaboration with back-end developers to seamlessly integrate front-end components with server-side functionality, ensuring the overall system’s reliability and efficiency.",
        start_date: "1/1/2022",
        end_date: "4/1/2023",
      },
    ],
  },
  {
    section_title: "Education",
    section_details: [
      {
        title:
          "Bachelor's of Information Technology (Hons.) in Software Engineering",
        company_name: "Universiti Kuala Lumpur (MIIT)",
        company_location: "Kuala Lumpur",
        start_date: "7/1/2017",
        end_date: "6/1/2021",
      },
      {
        title: "Foundation in Science and Technology (FiST)",
        company_name: "MARA College Kuala Nerang",
        company_location: "Kedah",
        start_date: "7/1/2016",
        end_date: "7/1/2017",
      },
    ],
  },
  {
    section_title: "Certificate",
    section_details: [
      {
        title: "JavaScript: Understanding the Weird Parts",
        company_name: "Udemy",
      },
      {
        title: "Agile Foundations: Scrum Methodology",
        company_name: "Skillsoft",
      },
      {
        title: "CI/CD Implementation for DevOps",
        company_name: "Skillsoft",
      },
      {
        title: "React - The Complete Guide",
        company_name: "Udemy",
      },
      {
        title: "The Web Developer Bootcamp ",
        company_name: "Udemy",
      },
    ],
  },
];
