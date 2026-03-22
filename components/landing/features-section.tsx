import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, MessageSquare, BookOpen, Code2 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "简历优化",
    description:
      "智能分析你的简历，提供针对性优化建议，突出技术亮点，让 HR 眼前一亮",
  },
  {
    icon: MessageSquare,
    title: "模拟面试",
    description:
      "真实还原面试场景，覆盖技术面、项目面、HR 面，全方位提升面试表现",
  },
  {
    icon: BookOpen,
    title: "面试题解答",
    description: "海量前端面试题库，深入浅出的解析，助你掌握核心知识点",
  },
  {
    icon: Code2,
    title: "代码评审",
    description: "AI 实时评审你的代码，提供优化建议，提升代码质量与编程思维",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            核心功能
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            从简历优化到模拟面试，一站式解决你的面试难题
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="homepage-feature-card homepage-card-glow bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg homepage-icon-container flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
