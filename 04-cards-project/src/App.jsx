import React from 'react'
import Card from './components/card'

const JOB_POSTINGS_DATA = [
  {
    company: "Amazon",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
    postedDaysAgo: 2,
    position: "Senior UI/UX Designer",
    tagEmploymentType: "Part-Time",
    tagExperienceLevel: "Senior Level",
    payRate: "$190/hr",
    location: "Karachi, Pakistan"
  },
  {
    company: "Google",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
    postedDaysAgo: 0,
    position: "Staff Interaction Designer",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Principal Level",
    payRate: "$240/hr",
    location: "Mountain View, CA"
  },
  {
    company: "Stripe",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg",
    postedDaysAgo: 5,
    position: "Product Designer (Growth)",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Mid-Weight",
    payRate: "$135,000/yr",
    location: "Remote (Global)"
  },
  {
    company: "Systems Limited",
    brandLogo: "https://img.icons8.com/color/48/domain.png",
    postedDaysAgo: 1,
    position: "Lead Frontend Engineer",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Lead Level",
    payRate: "PKR 350,000/mo",
    location: "Lahore, Pakistan"
  },
  {
    company: "Netflix",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg",
    postedDaysAgo: 4,
    position: "Senior Product Designer - Core Experience",
    tagEmploymentType: "Contract",
    tagExperienceLevel: "Senior Level",
    payRate: "$175/hr",
    location: "Los Gatos, CA"
  },
  {
    company: "Microsoft",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
    postedDaysAgo: 7,
    position: "UX Researcher II",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Intermediate",
    payRate: "$115/hr",
    location: "Karachi, Pakistan"
  },
  {
    company: "Automattic",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg",
    postedDaysAgo: 12,
    position: "Junior UI Designer",
    tagEmploymentType: "Part-Time",
    tagExperienceLevel: "Entry Level",
    payRate: "$45/hr",
    location: "Remote (EMEA)"
  },
  {
    company: "Shopify",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg",
    postedDaysAgo: 3,
    position: "Senior Mobile Product Designer (iOS/Android)",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Senior Level",
    payRate: "$160,000/yr",
    location: "Toronto, Canada"
  },
  {
    company: "Arbisoft",
    brandLogo: "https://img.icons8.com/color/48/company.png",
    postedDaysAgo: 6,
    position: "UI/UX Consultant",
    tagEmploymentType: "Contract",
    tagExperienceLevel: "Expert Level",
    payRate: "$95/hr",
    location: "Islamabad, Pakistan"
  },
  {
    company: "Airbnb",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/airbnb.svg",
    postedDaysAgo: 14,
    position: "Design Systems Specialist",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Senior Level",
    payRate: "$210/hr",
    location: "San Francisco, CA"
  },
  {
    company: "Meta",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg",
    postedDaysAgo: 1,
    position: "Product Design Director - AR/VR Systems",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Executive Level",
    payRate: "$310/hr",
    location: "Menlo Park, CA"
  },
  {
    company: "Uber",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/uber.svg",
    postedDaysAgo: 8,
    position: "Visual Designer, Driver Experience",
    tagEmploymentType: "Contract",
    tagExperienceLevel: "Mid-Weight",
    payRate: "$90/hr",
    location: "Amsterdam, Netherlands"
  },
  {
    company: "Figma",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
    postedDaysAgo: 3,
    position: "Principal AI/UX Design Lead & Systems Architect",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Principal Level",
    payRate: "$285,000/yr",
    location: "Remote (US)"
  },
  {
    company: "HBL (Habib Bank Limited)",
    brandLogo: "https://img.icons8.com/color/48/bank.png",
    postedDaysAgo: 10,
    position: "Digital Experience Lead",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Senior Level",
    payRate: "PKR 450,000/mo",
    location: "Karachi, Pakistan"
  },
  {
    company: "Slack",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg",
    postedDaysAgo: 5,
    position: "Accessibility & UX Specialist",
    tagEmploymentType: "Part-Time",
    tagExperienceLevel: "Senior Level",
    payRate: "$140/hr",
    location: "Remote (APAC)"
  },
  {
    company: "Atlassian",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/atlassian.svg",
    postedDaysAgo: 11,
    position: "Growth Product Designer",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Intermediate",
    payRate: "$125,000/yr",
    location: "Sydney, Australia"
  },
  {
    company: "Veloce",
    brandLogo: "https://img.icons8.com/color/48/shuttle.png",
    postedDaysAgo: 0,
    position: "Associate UI Designer (Web3/Crypto)",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Entry Level",
    payRate: "$60/hr",
    location: "Dubai, UAE"
  },
  {
    company: "Spotify",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg",
    postedDaysAgo: 6,
    position: "Design Operations Manager",
    tagEmploymentType: "Full-Time",
    tagExperienceLevel: "Lead Level",
    payRate: "$185,000/yr",
    location: "Stockholm, Sweden"
  },
  {
    company: "Adobe",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg",
    postedDaysAgo: 19,
    position: "Design System Engineer (React/Tailwind)",
    tagEmploymentType: "Contract",
    tagExperienceLevel: "Senior Level",
    payRate: "$165/hr",
    location: "San Jose, CA"
  },
  {
    company: "Toptal",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/toptal.svg",
    postedDaysAgo: 4,
    position: "Freelance UI/UX Expert",
    tagEmploymentType: "Contract",
    tagExperienceLevel: "Expert Level",
    payRate: "$220/hr",
    location: "Remote (Global)"
  }
];

const App = () => {
  return (
    <div className="parent">

      {JOB_POSTINGS_DATA.map((elem, idx) => (
        <Card key={idx} company={elem.company} brandLogo={elem.brandLogo} postedDaysAgo={elem.postedDaysAgo} position={elem.position} tagEmploymentType={elem.tagEmploymentType} tagExperienceLevel={elem.tagExperienceLevel} payRate={elem.payRate} location={elem.location} />
      ))}

    </div>
  )
}

export default App