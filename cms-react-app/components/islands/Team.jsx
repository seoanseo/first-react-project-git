export default function Team({ theMembers, styles }) {
    return (
      <> 
        {theMembers.map((teamMember, index) => (
          <div key={index} className={styles.member}>
            <img
              src={teamMember.team_member_photo.src}
              alt={teamMember.team_member_name}
              height={teamMember.team_member_photo.height}
              width={teamMember.team_member_photo.width}
            />
            <h3>{teamMember.team_member_name}</h3>
          </div>
        ))}
      </> 
    );
  }