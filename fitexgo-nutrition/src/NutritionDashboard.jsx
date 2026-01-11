import { Droplet, Flame } from "lucide-react";
import {
  PieChart,
  Pie,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

const macroData = [
  { name: "Carbs", value: 220 },
  { name: "Protein", value: 140 },
  { name: "Fats", value: 60 },
];

const weeklyData = [
  { day: "Mon", calories: 1800 },
  { day: "Tue", calories: 1950 },
  { day: "Wed", calories: 1700 },
  { day: "Thu", calories: 2000 },
  { day: "Fri", calories: 2100 },
  { day: "Sat", calories: 1900 },
  { day: "Sun", calories: 1850 },
];

export default function NutritionDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Nutrition Command Center</h1>

      {/* Daily Macros */}
      <div style={styles.card}>
        <h2>Daily Macros</h2>

        <div style={{ height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={macroData}
                dataKey="value"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={4}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <p>Carbs: 220g</p>
        <p>Protein: 140g</p>
        <p>Fats: 60g</p>
      </div>

      {/* Water Intake */}
      <div style={{ ...styles.card, background: "#0ea5e9" }}>
        <h2>Water Intake</h2>
        <p>2.1 / 3.0 Liters</p>
        <Droplet />
      </div>

      {/* Recent Meals */}
      <div style={styles.card}>
        <h2>Recent Meals</h2>
        <p>Oats & Fruits <Flame size={14} /> 420</p>
        <p>Grilled Chicken <Flame size={14} /> 560</p>
        <p>Protein Shake <Flame size={14} /> 280</p>
      </div>

      {/* Weekly Progress */}
      <div style={styles.card}>
        <h2>Weekly Progress</h2>
        <div style={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line dataKey="calories" stroke="#22d3ee" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    padding: 16,
    maxWidth: 400,
    margin: "auto",
    fontFamily: "Arial",
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  card: {
    background: "#1f2933",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
};
