import { EventEmitter } from '@angular/core';
import { Result } from './result.model';


export class resultService {

    resultSelected = new EventEmitter<Result>();

    private results : Result[] = [
        new Result(1, 'Seven Steps to Big Data Success', 'While 85% of organisations plan to use big data, only 17% believe they are capable of applying it to transform their business.'),
        new Result(2, 'S3 metadata without the latency or costs', 'One of our CMS implementations is able to serve its assets from S3, but we have noticed that the time to look up asset metadata can be expensive.'),
        new Result(3, 'Transformative Agile coaching from experienced Agile practitioners.', ''),
        new Result(4, 'The Five Stages of a Successful Agile Transformation', '42% of organisations cite a company philosophy or culture that’s at odds with core Agile values as a reason their Agile projects fail.'),
        new Result(5, 'Seven Elements of Agile You Can Take Outside Software Development', 'While Agile may have originated in the world of software development, many elements of the methodology can also be applied to organisations working outside of this industry.'),
        new Result(6, 'Seven Steps to Big Data Success', 'While 85% of organisations plan to use big data, only 17% believe they are capable of applying it to transform their business.'),
        new Result(7, 'S3 metadata without the latency or costs', 'One of our CMS implementations is able to serve its assets from S3, but we have noticed that the time to look up asset metadata can be expensive.'),
        new Result(8, 'Transformative Agile coaching from experienced Agile practitioners.', ''),
        new Result(9, 'The Five Stages of a Successful Agile Transformation', '42% of organisations cite a company philosophy or culture that’s at odds with core Agile values as a reason their Agile projects fail.'),
        new Result(10, 'Seven Elements of Agile You Can Take Outside Software Development', 'While Agile may have originated in the world of software development, many elements of the methodology can also be applied to organisations working outside of this industry.'),

    ];

    getResults() {
        return this.results.slice();
    }

    getresult(id : number) {
        return this.results[id];
    }
}
