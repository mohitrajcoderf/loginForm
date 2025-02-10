import fs from 'fs';
import path from 'path';

export async function getWritingIds () {
    const files = fs.readdirSync (
        path.join(process.cwd(), 'src/content/writings'),
    );
}