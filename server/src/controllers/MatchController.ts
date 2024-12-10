import { Request, Response } from "express";
import { Citi, Crud } from "../global";
import { request } from "http";

class MatchController implements Crud {
    constructor(private readonly citi = new Citi("Match")) {}

    create = async (request: Request, response: Response) => {
        const { gameName, platform, date, time, maxParticipants, link, description, username, email, participants} = request.body;

        const isAnyUndefined = this.citi.areValuesUndefined(
            gameName,
            platform,
            date,
            time,
            maxParticipants,
            link,
            description,
            username,
            email,
            participants
        );
        if (isAnyUndefined) return response.status(400).send();

        const newMatch = { gameName, platform, date, time, maxParticipants, link, description, username, email, participants };
        const { httpStatus, message } = await this.citi.insertIntoDatabase(newMatch);

        return response.status(httpStatus).send({ message });
    };

    get = async(request: Request, response: Response) => {
        const { httpStatus, values } = await this.citi.getAll();

        return response.status(httpStatus).send(values);
    };

    delete = async(request: Request, response: Response) => {
        const{id} = request.params;

        const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

        return response.status(httpStatus).send({ messageFromDelete });
    };

    update = async(request: Request, response: Response) => {
        const { id } = request.params;
        const { gameName, platform, date, time, maxParticipants, link, description, username, email, participants } = request.body;

        const updatedValues = { gameName, platform, date, time, maxParticipants, link, description, username, email, participants };

        const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
            id,
            updatedValues
        );

        return response.status(httpStatus).send({ messageFromUpdate });
    };
}

export default new MatchController();