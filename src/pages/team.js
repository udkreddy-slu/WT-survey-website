// pages/team.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './team.css'
const teamMembers = [
    { name: 'Bala murali satyendra', githubUsername: 'https://github.com/balamurali0532', icon: 'https://avatars.githubusercontent.com/u/1?v=4' },
    { name: 'Yenkatarajalaxmimanohar', githubUsername: 'https://github.com/yrlmanoharreddy', icon: 'https://avatars.githubusercontent.com/u/2?v=4' },
    { name: 'Harish Jamallamudi', githubUsername: 'https://github.com/harish426', icon: 'https://avatars.githubusercontent.com/u/3?v=4' },
    { name: 'Abhishek Gurudwar', githubUsername: 'https://github.com/agunit-73', icon: 'https://avatars.githubusercontent.com/u/4?v=4' },
    { name: 'Rahul Kandra', githubUsername: 'https://github.com/rahulkandra', icon: 'https://avatars.githubusercontent.com/u/5?v=4' },
    { name: 'Dushyanth Kumar Reddy', githubUsername: 'https://github.com/udkreddy', icon: 'https://avatars.githubusercontent.com/u/6?v=4' },
  ];

  const TeamMemberCard = ({ name, githubUsername }) => (
    <div className="team-member-card">
      <FontAwesomeIcon icon={faGithub} size="2x" className="profile-icon" />
      <div className="info">
        <h3>{name}</h3>
        <a href={`https://github.com/${githubUsername}`}>@{githubUsername}</a>
        <p>Role</p>
      </div>
    </div>
  );
  
  const Teams = () => (
    <div className="team">
      <h2>Welcome to our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
  
// const Teams = () => {
//     const TeamMemberCard = ({ name, githubUsername }) => (
//   <div className="team-member-card">
//     <FontAwesomeIcon icon={faGithub} size="2x" className="profile-icon" />
//     <div className="info">
//       <h3>{name}</h3>
//       <a href={`https://github.com/${githubUsername}`}>@{githubUsername}</a>
//     </div>
//   </div>
// );

// const Team = () => (
//   <div className="team">
//     <h2>Our Team</h2>
//     <div className="team-members">
//       {teamMembers.map((member, index) => (
//         <TeamMemberCard key={index} {...member} />
//       ))}
//     </div>
//   </div>
// );

//     return (
//         <div className="team-page"
//             style={{
//                 display: "flex",
//                 justifyContent: "centre",
//                 alignItems: "centre",
//                 height: "100vh",
//                 margin:"auto",
//                 width:"80%"
//             }}
//         >
//         {teamMembers.map(member => (
//         <div key={member.name} className="team-member">
//           <img src={member.icon} alt={`${member.name}'s profile`} className="profile-icon" />
//           <h3>{member.name}</h3>
//           <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
//         </div>
//       ))}
//         </div>
//     );
// };

export default Teams;
