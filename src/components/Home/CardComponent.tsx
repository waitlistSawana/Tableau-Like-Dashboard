"use client";

import { Card } from "@tremor/react";

function classNames(...classes: string[]) {
  //tsx中会报错？
  return classes.filter(Boolean).join(" ");
}

interface dataCType {
  keyname: string;
  values: number;
}

const data = [
  {
    name: "销售额",
    value: "$34.1K",
    change: "+6.1%",
    changeType: "positive",
  },
  {
    name: "订单量",
    value: "500.1K",
    change: "+19.2%",
    changeType: "positive",
  },
  {
    name: "客户数",
    value: "11.3%",
    change: "-1.2%",
    changeType: "negative",
  },
  {
    name: "平均单价",
    value: "57.89",
    change: "+10.9%",
    changeType: "positive",
  },
];

export default function CardComponent({ datas }: { datas: dataCType[] }) {
  // function handleclick(event: React.MouseEvent<HTMLButtonElement>){ //检查datas内容
  //   console.log(datas)
  // }

  return (
    <>
      {/* <button onClick={handleclick}>检查datas内容</button> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {datas.map((item) => (
          <Card key={item.keyname} className="shadow-lg">
            <p className="flex items-start justify-between">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.values}
              </span>
              {/* <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span> */}
            </p>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.keyname}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
