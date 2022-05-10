---

title:  "装饰 (Decorator)"
categories: jekyll update 设计模式
sidebar:
  nav: docs
---

动态地给一个对象一些额外的职责，叫增加功能来说，装饰模式比生成子类更为灵活

- Component：被装饰的类
  - Exec()：执行装饰对象链，每个对象对其他对象的顺序不关心
- Decorator：装饰基类
  - ComponentObj：存储装饰对象链的上一个对象
  - SetDecorator(Component* Obj)：设置上一个对象
- ConcreteDecoratorA、ConcreteDecoratorA：装饰类的具体实现类
- AddBehavior1、AddBehavior2：每个具体实现类特征

```mermaid
%%{init: {'theme': 'dark'}}%%
classDiagram
class Component{
	+Exec()
}
class ConcreteComponent{
	+Exec()
}
class Decorator{
	#Component* ComponentObj
	+SetDecorator(Component* Obj)
	+Exec()
}
class ConcreteDecoratorA{
	+Exec()
	-AddBehaviorA()
}
class ConcreteDecoratorB{
	+Exec()
	-AddBehaviorB()
}
Component<|-- ConcreteComponent: Inheritance, Dispensable
Component <|-- Decorator : Inheritance
Component<--o Decorator : Aggregation
Decorator <|-- ConcreteDecoratorA: Inheritance
Decorator <|-- ConcreteDecoratorB: Inheritance
```

```c++
#include <iostream>
class Component{
public:
virtual void Exec(){};
};

class Decorator : public Component{
protected:
Component* ComponentObj;
public:
void SetDecorator(Component* Obj){
if (!ComponentObj){
ComponentObj = Obj;
}
}
virtual void Exec() override{}
};

class ConcreteDecoratorA : public Decorator{
private:
void AddBehaviorA(){
std::cout << "AddBehaviorA" << std::endl;
}
public:
virtual void Exec() override{
ComponentObj->Exec();
std::cout << "Exec ConcreteDecoratorA" << std::endl;
AddBehaviorA();
}
};

class ConcreteDecoratorB : public Decorator{
private:
void AddBehaviorB(){
std::cout << "AddBehaviorB" << std::endl;
}
public:
virtual void Exec() override{
ComponentObj->Exec();
std::cout << "Exec ConcreteDecoratorB" << std::endl;
AddBehaviorB();
}
};

int main(){
Component* Target = new Component();
ConcreteDecoratorA* DtA = new ConcreteDecoratorA();
ConcreteDecoratorB* DtB = new ConcreteDecoratorB();

DtA->SetDecorator(Target);
DtB->SetDecorator(DtA);
DtB->Exec();
return 0;
}
```

```c++
//Output
Exec ConcreteDecoratorA
AddBehaviorA
Exec ConcreteDecoratorB
AddBehaviorB
```

```mermaid
%% 对象链
flowchart LR
Target --> ConcreteDecoratorA --> ConcreteDecoratorB
```