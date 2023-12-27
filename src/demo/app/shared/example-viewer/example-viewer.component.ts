import { Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EXAMPLE_COMPONENTS } from '../../examples/examples';

// 定义一个指令
@Directive({
    selector: '[example-host]',
})
export class ExampleHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}

@Component({
    selector: 'example-viewer',
    templateUrl: './example-viewer.component.html',
    styles: [`
        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.54);
        }

        a.btn {
            color: rgba(0, 0, 0, 0.54);
        }
        
        .card {
            margin-bottom: 20px;
        }
    `]
})
export class ExampleViewerComponent implements OnInit {
//    父组件route-viewer.component.ts给的
    @Input() example: string;
    // 用于获取对ExampleHostDirective引用
    @ViewChild(ExampleHostDirective, { static: true }) exampleHost: ExampleHostDirective;

    title: string;

    // 用于动态创建组件工厂服务 注入到组件中
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    get sourcePath() {
        return `https://github.com/ng-select/ng-select/tree/master/src/demo/app/examples/${this.example}`;
    }

    ngOnInit() {
        this.loadComponent();
    }

    private loadComponent() {
        // 获取示例的组件组件数组
        const example = EXAMPLE_COMPONENTS[this.example];
        // debugger;
        this.title = example.title;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(example.component);
        // 动态创建对应组件 并将其渲染到exampleHost
        const viewContainerRef = this.exampleHost.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
    }
}
