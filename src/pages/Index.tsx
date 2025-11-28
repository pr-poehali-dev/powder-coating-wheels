import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const services = [
    {
      icon: "Sparkles",
      title: "Порошковая покраска",
      description: "Высококачественное покрытие дисков в любой цвет по каталогу RAL. Долговечность до 10 лет.",
      price: "от 2500₽"
    },
    {
      icon: "Flame",
      title: "Аргонная сварка",
      description: "Профессиональная сварка литых и кованых дисков. Восстановление геометрии и трещин.",
      price: "от 1500₽"
    },
    {
      icon: "Wrench",
      title: "Правка дисков",
      description: "Устранение деформаций и восстановление геометрии на специализированном оборудовании.",
      price: "от 800₽"
    },
    {
      icon: "RefreshCw",
      title: "Реставрация",
      description: "Полное восстановление внешнего вида: шлифовка, полировка, покраска.",
      price: "от 3500₽"
    }
  ];

  const portfolio = [
    { before: "https://cdn.poehali.dev/projects/0c90148d-6d45-489a-8ebd-d505a7f6830c/files/b4eb066d-932f-4ad9-be13-1f9ffeb87202.jpg", after: "https://cdn.poehali.dev/projects/0c90148d-6d45-489a-8ebd-d505a7f6830c/files/97ff2b93-9764-4f5d-ade3-024c1139b527.jpg", title: "BMW M5 R19" },
    { before: "https://cdn.poehali.dev/projects/0c90148d-6d45-489a-8ebd-d505a7f6830c/files/b4eb066d-932f-4ad9-be13-1f9ffeb87202.jpg", after: "https://cdn.poehali.dev/projects/0c90148d-6d45-489a-8ebd-d505a7f6830c/files/0457415f-a0e0-4881-b98e-7d122b520361.jpg", title: "Mercedes AMG R20" },
    { before: "https://cdn.poehali.dev/projects/0c90148d-6d45-489a-8ebd-d505a7f6830c/files/b4eb066d-932f-4ad9-be13-1f9ffeb87202.jpg", after: "https://cdn.poehali.dev/projects/0c90148d-6d45-489a-8ebd-d505a7f6830c/files/97ff2b93-9764-4f5d-ade3-024c1139b527.jpg", title: "Audi RS6 R21" }
  ];

  const pricing = [
    { size: 'R13-R15', powder: '2000₽', repair: '800₽', welding: '1500₽' },
    { size: 'R16-R17', powder: '2500₽', repair: '1000₽', welding: '2000₽' },
    { size: 'R18-R19', powder: '3000₽', repair: '1200₽', welding: '2500₽' },
    { size: 'R20+', powder: '3500₽', repair: '1500₽', welding: '3000₽' }
  ];

  const faqs = [
    {
      question: "Сколько времени занимает порошковая покраска?",
      answer: "Стандартный срок — 3-5 рабочих дней. Срочная покраска за 24 часа доступна за доплату 50%."
    },
    {
      question: "Даёте ли вы гарантию на работы?",
      answer: "Да, на порошковую покраску — 2 года, на сварочные работы — 1 год, на правку дисков — 6 месяцев."
    },
    {
      question: "Можно ли покрасить диски в эксклюзивный цвет?",
      answer: "Конечно! Работаем с палитрой RAL (более 200 цветов), а также создаём индивидуальные оттенки под заказ."
    },
    {
      question: "Нужно ли снимать резину с дисков?",
      answer: "Да, для качественной покраски необходима разбортовка. Мы можем организовать это за дополнительную плату 400₽/колесо."
    },
    {
      question: "Восстанавливаете ли вы сильно повреждённые диски?",
      answer: "Да, выполняем сварку трещин, восстановление геометрии и устранение деформаций любой сложности."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Disc3" size={32} className="text-primary" />
            <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Яркие Диски
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Цены
                  </a>
                  <a 
                    href="#about" 
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    О нас
                  </a>
                  <a 
                    href="#faq" 
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button className="w-full mt-4">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left animate-fade-in">
                <Badge className="mb-4 text-base px-4 py-1">Профессиональный ремонт дисков</Badge>
                <h1 className="md:text-6xl mb-6 leading-tight text-4xl font-bold">
                  Порошковая покраска <br />
                  <span className="text-primary">и ремонт дисков</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Аргонная сварка, правка, реставрация. Гарантия качества и быстрые сроки. 
                  Работаем со всеми типами дисков.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-lg px-8">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Icon name="ImageIcon" size={20} className="mr-2" />
                    Посмотреть работы
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Гарантия </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Срок 3-5 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span>Опыт 12 лет</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/files/8b201aa5-8f54-43b6-8b53-8a7ae075169f.jpg" 
                  alt="Яркие Диски - порошковая покраска и ремонт"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-r from-secondary/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4"></Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр услуг по восстановлению и покраске автомобильных дисков
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gradient-to-l from-accent/15 via-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4"></Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-muted-foreground text-lg">До и после реставрации</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative aspect-square">
                    <img src={item.before} alt="До" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold">
                      До
                    </div>
                  </div>
                  <div className="relative aspect-square">
                    <img src={item.after} alt="После" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      После
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Порошковая покраска + реставрация</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-tr from-primary/10 via-secondary/15 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-muted-foreground text-lg">Прозрачные цены без скрытых доплат</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="p-4 text-left font-bold">Радиус диска</th>
                      <th className="p-4 text-left font-bold">Покраска</th>
                      <th className="p-4 text-left font-bold">Правка</th>
                      <th className="p-4 text-left font-bold">Сварка</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-semibold">{row.size}</td>
                        <td className="p-4">{row.powder}</td>
                        <td className="p-4">{row.repair}</td>
                        <td className="p-4">{row.welding}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="mt-6 text-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать точную стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-bl from-secondary/15 via-accent/10 to-primary/15">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">О компании</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Яркие Диски</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на профессиональном ремонте и покраске автомобильных дисков с 2012 года. 
                Наша команда — это опытные мастера с многолетним стажем и современным оборудованием.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Опытная команда</h3>
                    <p className="text-muted-foreground">Каждый мастер имеет сертификаты и опыт работы от 5 лет</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Современное оборудование</h3>
                    <p className="text-muted-foreground">Используем профессиональные станки и камеры для порошковой покраски</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Предоставляем официальную гарантию на все виды работ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Disc3" size={200} className="text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-r from-accent/20 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о наших услугах</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-tl from-primary/20 via-accent/15 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Ответим на все вопросы и запишем на удобное время</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Автомобильная, 25</p>
                    <p className="text-sm text-muted-foreground mt-1">5 минут от метро</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@wheelmaster.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="text-base" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="text-base" />
                </div>
                <div>
                  <Input placeholder="Марка и модель автомобиля" className="text-base" />
                </div>
                <div>
                  <Textarea placeholder="Опишите проблему или интересующую услугу" rows={4} className="text-base" />
                </div>
                <Button size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Disc3" size={32} className="text-primary" />
                <span className="text-2xl font-bold">Студия "Яркие Диски"</span>
              </div>
              <p className="text-sm opacity-80">Профессиональный ремонт и покраска автомобильных дисков </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Порошковая покраска</li>
                <li>Аргонная сварка</li>
                <li>Правка дисков</li>
                <li>Реставрация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Цены</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>info@wheelmaster.ru</li>
                <li>г. Москва, ул. Автомобильная, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            <p>© 2024 WheelMasterPaint. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}