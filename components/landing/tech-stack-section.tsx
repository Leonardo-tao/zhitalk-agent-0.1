const techAreas = [
  { name: "JavaScript", category: "语言" },
  { name: "TypeScript", category: "语言" },
  { name: "React", category: "框架" },
  { name: "Vue", category: "框架" },
  { name: "Next.js", category: "框架" },
  { name: "Node.js", category: "后端" },
  { name: "CSS/Sass", category: "样式" },
  { name: "Tailwind", category: "样式" },
  { name: "Webpack", category: "工具" },
  { name: "Vite", category: "工具" },
  { name: "Git", category: "工具" },
  { name: "算法", category: "基础" },
];

export function TechStackSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            覆盖主流技术栈
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            全面覆盖前端开发技术，从基础到框架，从工具到最佳实践
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techAreas.map((tech, index) => (
            <div
              key={tech.name}
              className="homepage-tech-tag group px-5 py-3 rounded-lg transition-all duration-300 cursor-default"
            >
              <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="text-muted-foreground text-xs ml-2">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
