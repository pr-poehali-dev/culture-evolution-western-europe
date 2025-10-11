import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SectionData {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: string[];
  facts: { title: string; description: string }[];
}

const sections: SectionData[] = [
  {
    id: 'art',
    title: 'Живопись и искусство',
    icon: 'Palette',
    color: 'bg-gradient-to-br from-amber-400 to-orange-600',
    items: ['Импрессионизм', 'Романтизм', 'Реализм'],
    facts: [
      {
        title: 'Импрессионизм',
        description: 'Революционное направление в живописи, зародившееся во Франции в 1860-х годах. Художники стремились передать мимолетные впечатления от света и цвета.'
      },
      {
        title: 'Клод Моне',
        description: 'Основатель импрессионизма, написал более 250 картин с изображением водяных лилий в своём саду в Живерни.'
      },
      {
        title: 'Романтизм',
        description: 'Направление, провозглашавшее культ чувства и воображения. Романтики обращались к темам природы, истории и национальной культуры.'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Архитектурные стили',
    icon: 'Building2',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-700',
    items: ['Неоготика', 'Неоренессанс', 'Эклектика'],
    facts: [
      {
        title: 'Неоготика',
        description: 'Возрождение готического стиля в архитектуре XIX века. Характерны острые шпили, стрельчатые арки и витражи.'
      },
      {
        title: 'Эйфелева башня',
        description: 'Построена в 1889 году для Всемирной выставки в Париже. Символ технического прогресса и инженерного искусства эпохи.'
      },
      {
        title: 'Эклектика',
        description: 'Смешение различных архитектурных стилей в одном здании. Популярна в конце XIX века в Европе и США.'
      }
    ]
  },
  {
    id: 'figures',
    title: 'Известные деятели культуры',
    icon: 'Award',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    items: ['Писатели', 'Композиторы', 'Художники'],
    facts: [
      {
        title: 'Виктор Гюго',
        description: 'Великий французский писатель, автор "Отверженных" и "Собора Парижской Богоматери". Символ романтизма в литературе.'
      },
      {
        title: 'Людвиг ван Бетховен',
        description: 'Немецкий композитор, соединивший классицизм и романтизм. Создал 9 симфоний, несмотря на полную глухоту в последние годы.'
      },
      {
        title: 'Винсент Ван Гог',
        description: 'Нидерландский художник-постимпрессионист. За жизнь продал всего одну картину, а сегодня его работы стоят миллионы.'
      }
    ]
  }
];

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId === selectedSection ? null : sectionId);
    if (!visitedSections.has(sectionId)) {
      setVisitedSections(new Set([...visitedSections, sectionId]));
      setScore(score + 33);
    }
  };

  const progress = (visitedSections.size / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-4 tracking-tight">
            Культура XIX века
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
            Игровое путешествие в историю Западной Европы и США
          </p>
          
          <div className="max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Прогресс исследования</span>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                <Icon name="Trophy" className="w-3 h-3 mr-1" />
                {score} баллов
              </Badge>
            </div>
            <Progress value={progress} className="h-3" />
            <p className="text-xs text-muted-foreground">
              Изучено разделов: {visitedSections.size} из {sections.length}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                selectedSection === section.id ? 'ring-4 ring-primary scale-105' : ''
              } ${visitedSections.has(section.id) ? 'border-primary' : 'border-border'}`}
              onClick={() => handleSectionClick(section.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className={`${section.color} text-white rounded-t-lg relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-10">
                  <Icon name={section.icon as any} className="w-32 h-32" />
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <Icon name={section.icon as any} className="w-12 h-12" />
                  {visitedSections.has(section.id) && (
                    <Badge className="bg-white/20 backdrop-blur-sm">
                      <Icon name="Check" className="w-4 h-4" />
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl mt-4">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 text-sm p-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <Icon name="BookOpen" className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full mt-4"
                  variant={selectedSection === section.id ? "default" : "outline"}
                >
                  {selectedSection === section.id ? 'Свернуть' : 'Узнать больше'}
                  <Icon
                    name={selectedSection === section.id ? "ChevronUp" : "ChevronDown"}
                    className="w-4 h-4 ml-2"
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedSection && (
          <div className="animate-scale-in">
            <Card className="border-primary border-2 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="flex items-center space-x-3">
                  <Icon
                    name={sections.find(s => s.id === selectedSection)?.icon as any}
                    className="w-8 h-8 text-primary"
                  />
                  <CardTitle className="text-3xl">
                    {sections.find(s => s.id === selectedSection)?.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base mt-2">
                  Интересные факты и важные детали
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {sections
                    .find(s => s.id === selectedSection)
                    ?.facts.map((fact, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="font-mono">
                              {index + 1}
                            </Badge>
                            <span>{fact.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground pl-12">
                          {fact.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}

        {visitedSections.size === sections.length && (
          <div className="mt-12 text-center animate-scale-in">
            <Card className="border-primary border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col items-center space-y-4">
                  <Icon name="Trophy" className="w-20 h-20 text-primary animate-pulse" />
                  <h3 className="text-3xl font-bold">Поздравляем!</h3>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Вы изучили все разделы о культуре XIX века! Вы заработали {score} баллов и стали настоящим знатоком истории.
                  </p>
                  <Button size="lg" className="text-lg px-8">
                    <Icon name="RotateCcw" className="w-5 h-5 mr-2" />
                    Начать заново
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
