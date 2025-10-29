import './states.css'

export function States(){
  const statsData=[
    {
      number: "5+",
      label: "design projects completed"
    },
    {
      number: "96%",
      label: "Client satisfaction rate"
    },
    {
      number: "3+",
      label: "Years of experiences"
    }
  ];

  return(
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}