import React from 'react'
import Card from './components/Card.jsx'
import User from './components/User.jsx'

const App = () => {
 
  const jobOpenings = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "3 days ago",
    position: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://imgs.search.brave.com/FgE9QedXR0V0RyJivRrtVCO_UQSWt_NKXA_JA2f4Mys/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGFpbG9yYnJhbmRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMS9hcHBs/ZV9sb2dvXzE5ODgu/anBn",
    company: "Apple",
    datePosted: "1 week ago",
    position: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://imgs.search.brave.com/kcwUNFQXnhfIN8R_IcdMTWqvnE5qdZmvcIxvLigMHK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    company: "Google",
    datePosted: "2 weeks ago",
    position: "Data Analyst",
    tag1: "Part-time",
    tag2: "Junior",
    pay: "$40/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://imgs.search.brave.com/ymaZGnwOAdav7GHzVTtEWAAgOKaTMQQcu4wVGCdbEVU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2xpbmtlZGluLWxv/Z28tcG5nLTExLnBu/Zw",
    company: "LinkedIn",
    datePosted: "5 days ago",
    position: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    company: "Amazon",
    datePosted: "10 weeks ago",
    position: "Cloud Architect",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$85/hr",
    location: "Pune, India"
  },
  {
    logo: "https://imgs.search.brave.com/75MbJJF1dDh1Q8qu4xP6I0PxSztlTHSpUZSj2Yxw8jo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JkLzkz/L2U0L2JkOTNlNDQz/YWQ5OTEyYmNmZDll/OGMxZDVhMzgwMTM2/LmpwZw",
    company: "Tesla",
    datePosted: "1 day ago",
    position: "Automation Engineer",
    tag1: "Contract",
    tag2: "Mid-level",
    pay: "$65/hr",
    location: "Austin, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    datePosted: "4 weeks ago",
    position: "AI Researcher",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    logo: "https://imgs.search.brave.com/tLvfVt-nHdAEncK1j60FTXe64Fsspr1t4YIicrE397c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ28ub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA4/L0dTLUdvbGRtYW4t/U2FjaHMtTG9nby5w/bmc",
    company: "Goldman Sachs",
    datePosted: "2 days ago",
    position: "Financial Analyst",
    tag1: "Full-time",
    tag2: "Junior",
    pay: "$50/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://imgs.search.brave.com/KnUjb5nz3v2kaNhWVt7d5DHfDiMxRDtvUn35H86GWws/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L0NoYXNlLVN5bWJv/bC01MDB4MzM1Lmpw/Zw",
    company: "J.P. Morgan Chase",
    datePosted: "3 weeks ago",
    position: "Risk Manager",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$80/hr",
    location: "New York, USA"
  },
  {
    logo: "https://imgs.search.brave.com/Vh-fPsum6IApNAk57_Tdu4-oEyP-u__s2iBdA97eIjI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9uZXRmbGl4LWxv/Z28taWNvbi5zdmc",
    company: "Netflix",
    datePosted: "6 days ago",
    position: "Machine Learning Engineer",
    tag1: "Remote",
    tag2: "Mid-level",
    pay: "$70/hr",
    location: "Remote"
  }
];

console.log(jobOpenings);


  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx){
        return<Card company={elem.company} post={elem.position} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.logo} datePosted={elem.datePosted} />
      })}
    </div>
  )
}

export default App