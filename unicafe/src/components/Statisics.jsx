import StatisticLine from './StatisticsLine'

const Statistics = ({ good, neutral, bad, total }) => {
  const score = good - bad > 0 ? good - bad : 0
  const average = score / total || 0
  const positive = (good / total) * 100 || 0

  return (
    <div>
      <h2>statistics</h2>
      {total ? (
        <table>
          <tbody>
            <StatisticLine text="good" score={good} />
            <StatisticLine text="neutral" score={neutral} />
            <StatisticLine text="bad" score={bad} />
            <StatisticLine text="all" score={total} />
            <StatisticLine text="average" score={average} />
            <StatisticLine text="positive" score={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

export default Statistics
