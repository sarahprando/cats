"use client";

import React from "react";
import styles from "./account-stats.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import { ImageLabel } from "@/actions/stats-get";

export default function AccountStats({ data }: { data: ImageLabel[] }) {
  const [graph, setGraph] = React.useState<{ x: string; y: number }[]>([]);

  React.useEffect(() => {
    const formatted = data.map((label) => ({
      x: label.Name,
      y: Number(label.Confidence.toFixed(0)),
    }));
    setGraph(formatted);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>

      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
}