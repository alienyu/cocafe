declare global {
    interface Window {
        deployConf: any
    }
    const common: any;
    const Loadable: any;
    const qs: any;

    const mobileCocafeRenderRoutes: any;
    const mobileCocafeConstants: any;
    const mobileCocafeAjax: any;

}

function loadGlobalVar() {
}

export default loadGlobalVar;