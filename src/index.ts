import fs from 'fs';
import { OpenApiParser } from './openapi-parser';
import { PdfWriter } from './pdf-writer';

const inputJson = fs.readFileSync('test-data/domain.json', 'utf8');

const parser = new OpenApiParser(new PdfWriter('output.pdf'), true);
parser.parse(inputJson, 'API');
parser.done();

