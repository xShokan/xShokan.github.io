---

title:  "原型 (Prototype)"
categories: jekyll update 设计模式
sidebar:
  nav: docs
---
为了实现实例能够自己创建一个和自己完全相同的对象

- Prototype：原型基类
- ConcreatePrototype1，ConcreatePrototype2：具体实现类
- Client：调用clone()类

```mermaid
classDiagram
direction TB
class Prototype{
    +clone()
}
class ConcreatePrototype1{
    +clone()
}
class ConcreatePrototype2{
    +clone()
}
class Client{
	
}
Prototype --> Client: Association
Prototype --|> ConcreatePrototype1 : Inheritance
Prototype --|>ConcreatePrototype2 : Inheritance
```

```c++
// Prototype.h
#include <string>
using namespace std;

class Prototype {
private:
    string Name;
public:
    Prototype(string Name):Name(Name){};

    virtual Prototype* clone();

    void PrintName();
};

class ConcreatePrototype : public Prototype{
public:
    using Prototype::Prototype;

    virtual Prototype * clone() override;
};

class Client{
public:
    void TestClone();
};
```
```c++
//Prototype.cpp
#include <iostream>
#include "Prototype.h"

Prototype *Prototype::clone() {
    return new Prototype(Name);
}

void Prototype::PrintName() {
    cout << "PrintName " << Name << endl;
}

// Call
void Client::TestClone() {
    ConcreatePrototype* TestPrototype = new ConcreatePrototype("TestPrototype");
    ConcreatePrototype* TestPrototype1 = dynamic_cast<ConcreatePrototype*>(TestPrototype->clone());
    ConcreatePrototype* TestPrototype2 = dynamic_cast<ConcreatePrototype*>(TestPrototype->clone());
    ConcreatePrototype* TestPrototype3 = dynamic_cast<ConcreatePrototype*>(TestPrototype->clone());
    TestPrototype1->PrintName();
    TestPrototype2->PrintName();
    TestPrototype3->PrintName();
}

Prototype *ConcreatePrototype::clone() {
    return new ConcreatePrototype("ConcreatePrototype");
}
```