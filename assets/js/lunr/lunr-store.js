var store = [{
        "title": "Gemified Theme -- Alpha Release",
        "excerpt":"Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days of forking a repo just to “install it”. Or dealing with merge conflicts when pulling in upstream commits to “upgrade it”. If you’re interested in testing out Minimal Mistakes as...","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll/update/gemified-theme-alpha/",
        "teaser": null
      },{
        "title": "Learning Notes",
        "excerpt":" ","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll/update/Test/",
        "teaser": null
      },{
        "title": "Welcome to Jekyll 114514 1919810!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll/update/welcome-to-jekyll/",
        "teaser": null
      },{
        "title": "Installation",
        "excerpt":"设置GitHub Pages 1 2 3 ♜   ♝ ♛ ♚ ♝ ♞ ♜   ♟ ♟ ♟   ♟ ♟ ♟ ♟   ♞             ♗     ♟               ♙                ...","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll/update/Jekyll-Installation/",
        "teaser": null
      },{
        "title": "单例 (Singleton)",
        "excerpt":"确保该类存在唯一对象，该类没法被外部实例化（构造函数私有）      SingleObject：唯一对象实例   Singleton()：私有构造函数   GetSingleton()：外部获取单例方法      class Singleton{ public: \tstatic Singleton* GetSingleton(){ \t\tif (!SingleObject) \t\t\tSingleObject = new Singeton; \t\treturn SingleObject; \t} private: \tSingleton(); \tstatic Singleton* SingleObject; }  ","categories": ["jekyll","update","设计模式"],
        "tags": [],
        "url": "/jekyll/update/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B-(Singleton)/",
        "teaser": null
      },{
        "title": "原则",
        "excerpt":"单一职责   类的职责分离，减少耦合。   开放封闭原则   软件实体（类、模块、函数等等）应该可以扩展，但是不可以修改。   里氏代换原则   子类型必须能够替换掉它们的父类型。   依赖倒转原则      高层模块不应该依赖低层模块。两个都应该依赖抽象。   抽象不应该依赖细节。细节应该依赖抽象。   迪米特法则   如果两个类不必彼此直接通信，那么这两个类就不应当发生直接的相互作用。如果其中一个类需要调用另一个类的某一个方法的话，可以通过第三者转发这个调用。   组合/聚合复用   尽量使用组合/聚合，尽量不要使用类继承。  ","categories": ["jekyll","update","设计模式"],
        "tags": [],
        "url": "/jekyll/update/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8E%9F%E5%88%99/",
        "teaser": null
      },{
        "title": "原型 (Prototype)",
        "excerpt":"为了实现实例能够自己创建一个和自己完全相同的对象 Prototype：原型基类 ConcreatePrototype1，ConcreatePrototype2：具体实现类 Client：调用clone()类 // Prototype.h #include &lt;string&gt; using namespace std; class Prototype { private: string Name; public: Prototype(string Name):Name(Name){}; virtual Prototype* clone(); void PrintName(); }; class ConcreatePrototype : public Prototype{ public: using Prototype::Prototype; virtual Prototype * clone() override; }; class Client{ public: void TestClone(); }; //Prototype.cpp #include &lt;iostream&gt; #include...","categories": ["jekyll","update","设计模式"],
        "tags": [],
        "url": "/jekyll/update/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8E%9F%E5%9E%8B-(Prototype)/",
        "teaser": null
      },{
        "title": "符号",
        "excerpt":"  ","categories": ["jekyll","update","设计模式"],
        "tags": [],
        "url": "/jekyll/update/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E7%AC%A6%E5%8F%B7/",
        "teaser": null
      },{
        "title": "策略 (Strategy)",
        "excerpt":"某个类的行为可以运行时动态变化 BaseStrategy：策略基类 Algorithm1、Algorithm2：策略行为 Strategy1、Strategy2、Strategy3：具体策略 Context：使用策略类 SetStrategy：设置策略实例 ExecStrategyAlgo1、ExecStrategyAlgo2：执行策略行为 #include &lt;iostream&gt; class BaseStrategy { public: virtual void Algorithm1(){} virtual void Algorithm2(){} }; class Strategy1 : public BaseStrategy{ public: virtual void Algorithm1() override{ std::cout &lt;&lt; \"Strategy1 Algorithm1\" &lt;&lt; std::endl; } virtual void Algorithm2() override{ std::cout &lt;&lt; \"Strategy1 Algorithm2\" &lt;&lt; std::endl; } }; class...","categories": ["jekyll","update","设计模式"],
        "tags": [],
        "url": "/jekyll/update/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E7%AD%96%E7%95%A5-(Strategy)/",
        "teaser": null
      },{
        "title": "装饰 (Decorator)",
        "excerpt":"动态地给一个对象一些额外的职责，叫增加功能来说，装饰模式比生成子类更为灵活 Component：被装饰的类 Exec()：执行装饰对象链，每个对象对其他对象的顺序不关心 Decorator：装饰基类 ComponentObj：存储装饰对象链的上一个对象 SetDecorator(Component* Obj)：设置上一个对象 ConcreteDecoratorA、ConcreteDecoratorA：装饰类的具体实现类 AddBehavior1、AddBehavior2：每个具体实现类特征 #include &lt;iostream&gt; class Component{ public: virtual void Exec(){}; }; class Decorator : public Component{ protected: Component* ComponentObj; public: void SetDecorator(Component* Obj){ if (!ComponentObj){ ComponentObj = Obj; } } virtual void Exec() override{} }; class ConcreteDecoratorA : public Decorator{ private: void AddBehaviorA(){...","categories": ["jekyll","update","设计模式"],
        "tags": [],
        "url": "/jekyll/update/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%A3%85%E9%A5%B0-(Decorator)/",
        "teaser": null
      },{
        "title": "C API",
        "excerpt":"    Lua接口                 lua_gettop 返回栈中元素个数         int lua_gettop (lua_state *L);                   lua_toxxx 返回栈中对应位置idx的元素         int lua_toxxx (lua_state *L, int idx);                   lua_next 返回将栈顶元素作为key查找下一对key-value入栈，入栈前会将栈顶元素弹出。如果栈顶元素为nil，则将第一对key-value入栈                  int lua_next (lua_state *L, int idx);                            ","categories": ["jekyll","update","Lua"],
        "tags": [],
        "url": "/jekyll/update/lua/C_API/",
        "teaser": null
      }]
