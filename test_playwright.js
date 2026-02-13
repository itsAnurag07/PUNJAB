import { chromium } from 'playwright';

async function test() {
    try {
        const browser = await chromium.launch();
        console.log('Browser launched successfully!');
        await browser.close();
    } catch (error) {
        console.error('Launch failed:', error);
    }
}

test();
