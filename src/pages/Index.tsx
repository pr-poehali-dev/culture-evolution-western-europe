import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const discoveries = [
    {
      id: 1,
      title: 'Электромагнетизм',
      scientist: 'Майкл Фарадей',
      year: '1831',
      category: 'physics',
      description: 'Открытие электромагнитной индукции стало основой для создания электрических генераторов и трансформаторов.',
      impact: 'Революция в энергетике'
    },
    {
      id: 2,
      title: 'Периодическая система элементов',
      scientist: 'Дмитрий Менделеев',
      year: '1869',
      category: 'chemistry',
      description: 'Периодический закон и таблица химических элементов, позволившая предсказать свойства неоткрытых элементов.',
      impact: 'Основа современной химии'
    },
    {
      id: 3,
      title: 'Теория эволюции',
      scientist: 'Чарльз Дарвин',
      year: '1859',
      category: 'biology',
      description: 'Теория естественного отбора объяснила механизм эволюции видов и происхождение человека.',
      impact: 'Революция в биологии'
    },
    {
      id: 4,
      title: 'Микробная теория',
      scientist: 'Луи Пастер',
      year: '1860-е',
      category: 'biology',
      description: 'Доказательство роли микроорганизмов в процессах брожения и болезней, основа микробиологии.',
      impact: 'Прорыв в медицине'
    },
    {
      id: 5,
      title: 'Рентгеновское излучение',
      scientist: 'Вильгельм Рентген',
      year: '1895',
      category: 'physics',
      description: 'Открытие проникающего излучения, позволившего увидеть внутреннее строение объектов.',
      impact: 'Революция в медицинской диагностике'
    },
    {
      id: 6,
      title: 'Радиоактивность',
      scientist: 'Мария и Пьер Кюри',
      year: '1898',
      category: 'physics',
      description: 'Открытие радия и полония, изучение радиоактивности как свойства атомов.',
      impact: 'Основа ядерной физики'
    },
    {
      id: 7,
      title: 'Специальная теория относительности',
      scientist: 'Альберт Эйнштейн',
      year: '1905',
      category: 'physics',
      description: 'Революционная теория, изменившая представление о пространстве, времени и энергии.',
      impact: 'Переворот в физике'
    },
    {
      id: 8,
      title: 'Группы крови',
      scientist: 'Карл Ландштейнер',
      year: '1900',
      category: 'biology',
      description: 'Открытие системы групп крови АВ0, сделавшее возможным безопасное переливание крови.',
      impact: 'Спасение миллионов жизней'
    }
  ];

  const inventions = [
    {
      id: 1,
      title: 'Паровой двигатель (усовершенствование)',
      inventor: 'Джеймс Уатт',
      year: '1769',
      category: 'industry',
      description: 'Усовершенствованный паровой двигатель стал основой промышленной революции.',
      impact: 'Индустриальная революция'
    },
    {
      id: 2,
      title: 'Электрическая лампочка',
      inventor: 'Томас Эдисон',
      year: '1879',
      category: 'energy',
      description: 'Практичная лампа накаливания с долгим сроком службы, изменившая жизнь миллионов.',
      impact: 'Освещение мира'
    },
    {
      id: 3,
      title: 'Телефон',
      inventor: 'Александр Белл',
      year: '1876',
      category: 'communication',
      description: 'Первое устройство для передачи человеческого голоса на расстояние.',
      impact: 'Революция в коммуникации'
    },
    {
      id: 4,
      title: 'Радио',
      inventor: 'Гульельмо Маркони',
      year: '1895',
      category: 'communication',
      description: 'Беспроводная передача сигналов на расстояние, основа современных коммуникаций.',
      impact: 'Беспроводная связь'
    },
    {
      id: 5,
      title: 'Автомобиль',
      inventor: 'Карл Бенц',
      year: '1885',
      category: 'transport',
      description: 'Первый практичный автомобиль с двигателем внутреннего сгорания.',
      impact: 'Революция в транспорте'
    },
    {
      id: 6,
      title: 'Самолёт',
      inventor: 'Братья Райт',
      year: '1903',
      category: 'transport',
      description: 'Первый управляемый полёт на аппарате тяжелее воздуха с двигателем.',
      impact: 'Начало авиации'
    },
    {
      id: 7,
      title: 'Кинематограф',
      inventor: 'Братья Люмьер',
      year: '1895',
      category: 'entertainment',
      description: 'Первый публичный показ кинофильмов, рождение киноискусства.',
      impact: 'Новая форма искусства'
    },
    {
      id: 8,
      title: 'Фонограф',
      inventor: 'Томас Эдисон',
      year: '1877',
      category: 'entertainment',
      description: 'Первое устройство для записи и воспроизведения звука.',
      impact: 'Запись звука'
    },
    {
      id: 9,
      title: 'Динамит',
      inventor: 'Альфред Нобель',
      year: '1867',
      category: 'industry',
      description: 'Мощное взрывчатое вещество, упростившее строительство и горное дело.',
      impact: 'Строительство и промышленность'
    },
    {
      id: 10,
      title: 'Пастеризация',
      inventor: 'Луи Пастер',
      year: '1864',
      category: 'food',
      description: 'Метод обработки продуктов для уничтожения вредных микроорганизмов.',
      impact: 'Безопасность пищи'
    }
  ];

  const categoryIcons: { [key: string]: string } = {
    physics: 'Atom',
    chemistry: 'FlaskConical',
    biology: 'Dna',
    industry: 'Factory',
    energy: 'Lightbulb',
    communication: 'Radio',
    transport: 'Car',
    entertainment: 'Film',
    food: 'Apple'
  };

  const filteredDiscoveries = selectedCategory === 'all' 
    ? discoveries 
    : discoveries.filter(d => d.category === selectedCategory);

  const filteredInventions = selectedCategory === 'all' 
    ? inventions 
    : inventions.filter(i => i.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div 
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://cdn.poehali.dev/projects/f4e66f76-ba25-4990-91bf-1b037f53ccfc/files/51140fb8-b449-4a4e-99b5-71f071747ea7.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <Icon name="Microscope" size={64} className="text-amber-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Великие открытия XIX-XX веков
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Эпоха научных революций и технических прорывов, изменившая мир навсегда
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="discoveries" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="discoveries" className="text-lg">
              <Icon name="Microscope" size={20} className="mr-2" />
              Научные открытия
            </TabsTrigger>
            <TabsTrigger value="inventions" className="text-lg">
              <Icon name="Lightbulb" size={20} className="mr-2" />
              Технические изобретения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discoveries">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Научные открытия</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Фундаментальные открытия, раскрывшие тайны природы и заложившие основу современной науки
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('all')}
                >
                  Все
                </Badge>
                <Badge 
                  variant={selectedCategory === 'physics' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('physics')}
                >
                  <Icon name="Atom" size={16} className="mr-1" />
                  Физика
                </Badge>
                <Badge 
                  variant={selectedCategory === 'chemistry' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('chemistry')}
                >
                  <Icon name="FlaskConical" size={16} className="mr-1" />
                  Химия
                </Badge>
                <Badge 
                  variant={selectedCategory === 'biology' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('biology')}
                >
                  <Icon name="Dna" size={16} className="mr-1" />
                  Биология
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDiscoveries.map((discovery) => (
                <Card key={discovery.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon name={categoryIcons[discovery.category]} size={32} className="text-primary" />
                      <Badge variant="secondary">{discovery.year}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{discovery.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground">
                      {discovery.scientist}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3 text-muted-foreground">{discovery.description}</p>
                    <Badge variant="outline" className="bg-amber-50">
                      <Icon name="Sparkles" size={14} className="mr-1" />
                      {discovery.impact}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inventions">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Технические изобретения</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Инновации, изменившие повседневную жизнь и создавшие основу современной цивилизации
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('all')}
                >
                  Все
                </Badge>
                <Badge 
                  variant={selectedCategory === 'industry' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('industry')}
                >
                  <Icon name="Factory" size={16} className="mr-1" />
                  Промышленность
                </Badge>
                <Badge 
                  variant={selectedCategory === 'energy' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('energy')}
                >
                  <Icon name="Lightbulb" size={16} className="mr-1" />
                  Энергетика
                </Badge>
                <Badge 
                  variant={selectedCategory === 'communication' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('communication')}
                >
                  <Icon name="Radio" size={16} className="mr-1" />
                  Связь
                </Badge>
                <Badge 
                  variant={selectedCategory === 'transport' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('transport')}
                >
                  <Icon name="Car" size={16} className="mr-1" />
                  Транспорт
                </Badge>
                <Badge 
                  variant={selectedCategory === 'entertainment' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('entertainment')}
                >
                  <Icon name="Film" size={16} className="mr-1" />
                  Развлечения
                </Badge>
                <Badge 
                  variant={selectedCategory === 'food' ? 'default' : 'outline'}
                  className="cursor-pointer text-sm py-2 px-4"
                  onClick={() => setSelectedCategory('food')}
                >
                  <Icon name="Apple" size={16} className="mr-1" />
                  Пищевая отрасль
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInventions.map((invention) => (
                <Card key={invention.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon name={categoryIcons[invention.category]} size={32} className="text-primary" />
                      <Badge variant="secondary">{invention.year}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{invention.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground">
                      {invention.inventor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3 text-muted-foreground">{invention.description}</p>
                    <Badge variant="outline" className="bg-amber-50">
                      <Icon name="Zap" size={14} className="mr-1" />
                      {invention.impact}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-white/80 backdrop-blur rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Эпоха перемен</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f4e66f76-ba25-4990-91bf-1b037f53ccfc/files/3c8cf1d9-be1a-46bd-8dcd-b87397a5f628.jpg" 
                alt="Учёный в лаборатории"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-3">Научная революция</h3>
              <p className="text-muted-foreground">
                XIX век стал золотым веком науки. Учёные раскрыли фундаментальные законы природы, 
                создали периодическую систему элементов, объяснили эволюцию живых организмов и открыли 
                микромир бактерий и атомов.
              </p>
            </div>
            
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f4e66f76-ba25-4990-91bf-1b037f53ccfc/files/de9f64a5-43fb-4b82-bb45-c12e7b35aaeb.jpg" 
                alt="Технологии начала XX века"
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold mb-3">Промышленная революция</h3>
              <p className="text-muted-foreground">
                Технические изобретения преобразили мир. Паровые машины, электричество, телефоны, 
                автомобили и самолёты изменили транспорт, коммуникации и быт людей. Наступила эра 
                индустриализации и массового производства.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={32} className="text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Наследие эпохи</h3>
                <p className="text-muted-foreground mb-3">
                  Открытия и изобретения XIX - начала XX века заложили фундамент современной цивилизации. 
                  Научные теории того времени остаются актуальными, а технические решения эволюционировали 
                  в сложные системы сегодняшнего дня.
                </p>
                <p className="text-muted-foreground">
                  Этот период показал, как наука и технологии могут трансформировать общество, улучшить 
                  качество жизни и открыть новые горизонты для человечества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-amber-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            Великие открытия изменяют мир. Наука и технологии - двигатели прогресса.
          </p>
          <p className="text-sm mt-4 text-amber-200">
            XIX - начало XX века • Эпоха великих открытий
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
