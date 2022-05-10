---

title:  "单例 (Singleton)"
categories: jekyll update 设计模式
sidebar:
  nav: docs
---

确保该类存在唯一对象，该类没法被外部实例化（构造函数私有）

- SingleObject：唯一对象实例
- Singleton()：私有构造函数
- GetSingleton()：外部获取单例方法

```mermaid
%%{init: {'theme': 'dark'}}%%
classDiagram
class Singleton{
	-Singleton SingleObject
	-Singleton()
	+GetSingleton()
}
```

```c++
class Singleton{
public:
	static Singleton* GetSingleton(){
		if (!SingleObject)
			SingleObject = new Singeton;
		return SingleObject;
	}
private:
	Singleton();
	static Singleton* SingleObject;
}
```