import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id_admin } = req.query;
  
  // Validasi ID
  if (!id_admin || typeof id_admin !== 'string') {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid admin ID" 
    });
  }
  
  // Handle GET request
  if (req.method === 'GET') {
    try {
      const admin = await prisma.admin.findUnique({
        where: { id_admin },
        select: {
          id_admin: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
          // Explisit tidak memilih password
        }
      });

      if (!admin) {
        return res.status(404).json({ 
          success: false, 
          message: "Admin not found" 
        });
      }

      return res.status(200).json({
        success: true,
        message: "Admin data retrieved successfully",
        data: admin,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error retrieving admin data",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
  
  // Handle PUT request
  else if (req.method === 'PUT') {
    try {
      const body = req.body;
      
      // Validasi body
      if (!body || typeof body !== 'object') {
        return res.status(400).json({
          success: false, 
          message: "Invalid request body"
        });
      }

      const existingAdmin = await prisma.admin.findUnique({
        where: { id_admin },
      });

      if (!existingAdmin) {
        return res.status(404).json({ 
          success: false, 
          message: "Admin not found" 
        });
      }

      // Persiapkan data update
      const updateData: any = {};
      
      // Update nama jika ada
      if (body.name) {
        updateData.name = body.name;
      }
      
      // Update email jika ada dan validasi email unik
      if (body.email && body.email !== existingAdmin.email) {
        const emailExists = await prisma.admin.findUnique({
          where: { email: body.email },
        });

        if (emailExists) {
          return res.status(409).json({ 
            success: false, 
            message: "Email already in use" 
          });
        }
        
        updateData.email = body.email;
      }
      
      // Update password jika ada
      if (body.password) {
        updateData.password = await bcrypt.hash(body.password, 10);
      }

      // Update admin
      const updatedAdmin = await prisma.admin.update({
        where: { id_admin },
        data: updateData,
        select: {
          id_admin: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
          // Explisit tidak memilih password
        }
      });

      return res.status(200).json({
        success: true,
        message: "Admin updated successfully",
        data: updatedAdmin,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "Update error",
      });
    }
  }
  
  // Handle DELETE request
  else if (req.method === 'DELETE') {
    try {
      const existingAdmin = await prisma.admin.findUnique({
        where: { id_admin },
      });

      if (!existingAdmin) {
        return res.status(404).json({ 
          success: false, 
          message: "Admin not found" 
        });
      }

      await prisma.admin.delete({
        where: { id_admin },
      });

      return res.status(200).json({ 
        success: true, 
        message: "Admin deleted successfully" 
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "Delete error",
      });
    }
  }
  
  // Handle unsupported methods
  else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    return res.status(405).json({ 
      success: false, 
      message: `Method ${req.method} Not Allowed` 
    });
  }
} 