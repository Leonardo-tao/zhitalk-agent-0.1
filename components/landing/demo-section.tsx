"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const demos = [
  {
    id: 1,
    title: "简历优化演示",
    description: "上传简历，AI 智能分析并给出优化建议",
    // 替换为你的 GIF 路径
    gifUrl: "/resume-optimization.gif",
    tag: "简历优化",
  },
  {
    id: 2,
    title: "模拟面试演示",
    description: "真实面试场景，AI 面试官实时提问",
    // 替换为你的 GIF 路径
    gifUrl: "/mock-interview.gif",
    tag: "模拟面试",
  },
  {
    id: 3,
    title: "面试题解答演示",
    description: "海量题库，深入浅出的解析",
    // 替换为你的 GIF 路径
    gifUrl: "/question-answer.gif",
    tag: "题目解答",
  },
];

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <section className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            功能演示
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            观看实际操作演示，了解 AI 面试官如何帮助你
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              type="button"
              onClick={() => setActiveDemo(index)}
              data-active={activeDemo === index}
              className={cn(
                "homepage-demo-tab px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeDemo === index
                  ? "bg-primary text-primary-foreground homepage-active-indicator"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {demo.tag}
            </button>
          ))}
        </div>

        {/* Demo Display */}
        <Card className="homepage-demo-container bg-card border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              {/* GIF Container */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <Image
                  src={demos[activeDemo].gifUrl}
                  alt={demos[activeDemo].title}
                  className="w-full h-full object-cover"
                  width={1920}
                  height={870}
                  unoptimized
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88+P3fwAJzQP5iH/WNAAAAABJRU5ErkJggg=="
                />
              </div>

              {/* Demo Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/80 to-transparent p-6">
                <Badge variant="secondary" className="mb-2">
                  {demos[activeDemo].tag}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {demos[activeDemo].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
