import "express";
import { JwtPayload } from "jsonwebtoken";
import { IEcosystem, IParticipant } from "./models";

import Joi from "joi";

declare module "express" {
  interface Request {
    decodedToken?: JwtPayload;
    user?: {
      id: string;

      /**
       * Only available on handlers that come
       * after usePopulatedUser
       */
      populated?: IParticipant;
    };

    /**
     * Available after a successful ownership
     * verification on a PUT request
     */
    ecosystem?: IEcosystem;

    validationSchema?: Joi.ObjectSchema;
  }
}
