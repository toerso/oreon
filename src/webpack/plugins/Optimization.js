//Here all webpack bundle optimization code goes................

class Optimization {
    constructor() {
        this.optimaization = {runtimeChunk: 'single'};
    }

    splitChunk() {
        this.optimaization.splitChunks = {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
        };

        this.optimaization.splitChunks.cacheGroups = this.cacheGroups();
    }

    cacheGroups() {
        const cacheGrps = {default: false};

        cacheGrps.reactAndDom = this.ckgReactAndDom();
        cacheGrps.reactBootstrap = this.ckgReactBootstrap();
        cacheGrps.bootstrap = this.ckgBootstrap();
        cacheGrps.mui = this.ckgMui();
        cacheGrps.vendors = this.ckgVendors();

        return cacheGrps;
    }
    //ckg--->cache group key
    ckgReactAndDom() {
        return {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react&dom',
            filename: 'js/oreon.[name].[contenthash].js',
            chunks: 'all',
            reuseExistingChunk: true
        }
    }

    ckgReactBootstrap() {
        return {
            test: /[\\/]node_modules[\\/](react-bootstrap)[\\/]/,
            name: 'reactBootstrap',
            filename: 'js/oreon.[name].[contenthash].js',
            chunks: 'all',
            reuseExistingChunk: true
        }
    }

    ckgMui() {
        return {
            test: /[\\/]node_modules[\\/]((@mui.*)|(@emotion.*))[\\/]/,
            name: 'mui',
            filename: 'js/oreonnyx.[name].[contenthash].js',
            chunks: 'all',
            reuseExistingChunk: true
        }
    }

    ckgBootstrap() {
        return {
            test: /[\\/]node_modules[\\/](bootstrap)[\\/]/,
            name: 'bootstrap',
            filename: 'js/oreonnyx.[name].[contenthash].js',
            chunks: 'all',
            reuseExistingChunk: true
        }
    }

    ckgVendors() {
        return {
            test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
            name: 'vendors',
            filename: 'js/oreonnyx.[name].[contenthash].js',
            chunks: 'all',
            reuseExistingChunk: true
        }
    }
}

module.exports = Optimization;